import { Vector3 } from "three";
import { Tile, Face, Color } from "../types/rubiks";
import {
  FACE_TO_MOVE_DESCRIPTOR,
  FACE_TO_TILE_SORT_PREDICATE,
  FACE_TO_COLOR,
} from "./constants";

function getFace(pos: Vector3): Face {
  if (pos.z === 3) return "F";
  else if (pos.z === -3) return "B";
  else if (pos.x === 3) return "R";
  else if (pos.x === -3) return "L";
  else if (pos.y === 3) return "U";
  else if (pos.y === -3) return "D";

  throw Error(`Invalid tile coordinate vector: ${pos}`);
}

/**
 * Creates a new Rubik's cube represented as a list of tiles.
 *
 * Each tile is represented by a point in a 3D grid, where each tile has
 * a length of 2. The length of 2 is chosen to ensure integer coordinates.
 *
 * E.g. The tiles for face F (front) are at the surface defined by `z = 3`, in
 * the range `[-2, 2]` for the x and y coordinates.
 *
 * @returns a list of 54 Rubik's cube tiles for a solved cube.
 */
export function makeCube(): Tile[] {
  const cube: Tile[] = [];

  for (let faceCoord of [-3, 3]) {
    for (let coord1 of [-2, 0, 2]) {
      for (let coord2 of [-2, 0, 2]) {
        const pos1 = new Vector3(faceCoord, coord1, coord2);
        const pos2 = new Vector3(coord1, faceCoord, coord2);
        const pos3 = new Vector3(coord1, coord2, faceCoord);

        cube.push({ pos: pos1, face: getFace(pos1) });
        cube.push({ pos: pos2, face: getFace(pos2) });
        cube.push({ pos: pos3, face: getFace(pos3) });
      }
    }
  }

  return cube;
}

/**
 * Applies a 90 degree rotation on one of `cube`'s faces.
 *
 * @returns a new cube that results from applying the rotation.
 */
export function rotateFace(
  cube: Tile[],
  face: Face,
  clockwise: boolean
): Tile[] {
  const { axis, tileSelectorPredicate } = FACE_TO_MOVE_DESCRIPTOR[face];
  const angle = clockwise ? -Math.PI / 2 : Math.PI / 2;

  return cube.map((tile) => {
    if (!tileSelectorPredicate(tile.pos)) {
      return { ...tile };
    }

    const newTile = {
      ...tile,
      pos: tile.pos.clone().applyAxisAngle(axis, angle).round(),
    };

    return newTile;
  });
}

/**
 * Gets the color state of the `cube`'s `face`. The colors list is sorted so
 * that the tiles in each face are displayed correctly for a flattened cube.
 *
 * @returns a list of colors representing the state of the `cube`'s `face`.
 */
export function getFaceColors(cube: Tile[], face: Face): Color[] {
  return cube
    .filter((tile) => getFace(tile.pos) === face)
    .sort((t1, t2) => FACE_TO_TILE_SORT_PREDICATE[face](t1, t2))
    .map((tile) => FACE_TO_COLOR[tile.face]);
}

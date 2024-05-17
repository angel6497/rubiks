import { Color, Tile } from "../types/rubiks";

import { Vector3 } from "three";
import { MoveDescriptor } from "../types/rubiks";

export const COLORS = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
] as const;

export const FACE_TO_COLOR: { [key: string]: Color } = {
  F: "gray",
  B: "red",
  R: "green",
  L: "yellow",
  U: "blue",
  D: "orange",
} as const;

export const FACE_TO_MOVE_DESCRIPTOR: { [key: string]: MoveDescriptor } = {
  F: { axis: new Vector3(0, 0, 1), tileSelectorPredicate: (pos) => pos.z > 0 },
  B: { axis: new Vector3(0, 0, -1), tileSelectorPredicate: (pos) => pos.z < 0 },
  R: { axis: new Vector3(1, 0, 0), tileSelectorPredicate: (pos) => pos.x > 0 },
  L: { axis: new Vector3(-1, 0, 0), tileSelectorPredicate: (pos) => pos.x < 0 },
  U: { axis: new Vector3(0, 1, 0), tileSelectorPredicate: (pos) => pos.y > 0 },
  D: { axis: new Vector3(0, -1, 0), tileSelectorPredicate: (pos) => pos.y < 0 },
} as const;

/**
 * Sorting functions to display each face correctly as a flattened cube.
 */
export const FACE_TO_TILE_SORT_PREDICATE: {
  [key: string]: (t1: Tile, t2: Tile) => number;
} = {
  F: (t1, t2) => t2.pos.y - t1.pos.y || t1.pos.x - t2.pos.x,
  B: (t1, t2) => t2.pos.y - t1.pos.y || t2.pos.x - t1.pos.x,
  R: (t1, t2) => t2.pos.y - t1.pos.y || t2.pos.z - t1.pos.z,
  L: (t1, t2) => t2.pos.y - t1.pos.y || t1.pos.z - t2.pos.z,
  U: (t1, t2) => t1.pos.z - t2.pos.z || t1.pos.x - t2.pos.x,
  D: (t1, t2) => t2.pos.z - t1.pos.z || t1.pos.x - t2.pos.x,
} as const;

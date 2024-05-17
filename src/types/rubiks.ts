import { Vector3 } from "three";
import { COLORS } from "../util/constants";

/**
 * Represents a Rubik's cube move (a rotation).
 */
export type MoveDescriptor = {
  /**
   * Axis to rotate.
   */
  axis: Vector3;

  /**
   * Predicate to select tiles that should be included in the move.
   */
  tileSelectorPredicate: (pos: Vector3) => boolean;
};

export type Color = (typeof COLORS)[number];

/**
 * Valid face labels corresponding to:
 * - Up: `U`
 * - Down: `D`
 * - Front: `F`
 * - Back: `B`
 * - Left: `L`
 * - Right: `R`
 */
export type Face = "U" | "D" | "F" | "R" | "L" | "B";

/**
 * Rubik's cube tile.
 */
export type Tile = {
  /**
   * Current tile position.
   */
  pos: Vector3;

  /**
   * Tile's original (solved) position.
   */
  face: Face;
};

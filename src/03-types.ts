/*
 * Кастомные типы с Type
 * - Идентификатор c type composition
 * - Состояние с union
 */

type ID = number | string;

const userId: ID = 5555;
const postId: ID = "f7ln24m91z";

type Coords = [number, number];

const coords: Coords = [50.4501, 30.5234];

type ReqStatus = "request" | "success" | "error";

const requestStatus: ReqStatus = "success";

type CellSize = 2 | 4 | 8 | 16;

const cell: CellSize = 4;

console.log(userId, postId, coords);
export {};



import { MessageCreateSchema } from "./MessageCreateSchema";

export type MessageEditSchema = Omit<MessageCreateSchema, "type">;

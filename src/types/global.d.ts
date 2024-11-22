declare global {
  type GetSingle<T> = T extends (infer U)[] ? U : never;
}

export {};

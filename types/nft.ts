export type NftTrait = "attack" | "health" | "speed";

export type NftAttributes = {
  trait_type: NftTrait;
  value: string;
};

export type NftMeta = {
  name: string;
  description: string;
  image: string;
  attributes: NftAttributes[];
};

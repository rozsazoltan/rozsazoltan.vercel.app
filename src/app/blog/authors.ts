import rozsazoltanAvatar from "./img/rozsazoltan.jpg";

export interface Author {
  name: string;
  twitter: string;
  avatar: string;
}

export const rozsazoltan = {
  name: "Zoltán Rózsa",
  twitter: "rozsazoltan_dev",
  avatar: rozsazoltanAvatar.src,
} satisfies Author;

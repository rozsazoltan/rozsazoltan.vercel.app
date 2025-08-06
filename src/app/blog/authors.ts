import rozsazoltanAvatar from "./img/rozsazoltan.jpg";
import phpwatchAvatar from "./img/phpwatch.jpg";

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

export const phpwatch = {
  name: "PHP.Watch",
  twitter: "phpwch",
  avatar: phpwatchAvatar.src,
} satisfies Author;

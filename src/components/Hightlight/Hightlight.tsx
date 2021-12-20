import React from "react";

import './Hightlight.scss';

type Props = {
  string: string | any;
  filter: string | any;
}

export const Hightlight: React.FC<Props> = ({ string, filter }) => {
  if (!filter) return string;

  const regexp = new RegExp(filter, 'ig');
  const matchValue = string?.match(regexp);

  if (matchValue) {
    return string?.split(regexp).map((
      item: string,
      index: number,
      array: string[]
    ) => {
      if (index < array.length - 1) {
        const start = matchValue.shift();

        return (
          <>
            {item}
            <span className="hightlight">
              {start}
            </span>
          </>
        );
      }

      return item;
    });
  }

  return string;
};



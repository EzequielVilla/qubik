import { Breadcrumbs, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import {
  PathFromRoot,
  getInfoForProductsBreadcrumb,
  getInfoForItemBreadcrumb,
} from "../../lib/breadcrumb";

import { Text } from "../../ui/Text";
import { Root } from "./styled";

interface Props {
  categories?: string[];
  category?: string;
}

export const Breadcrumb = (props: Props) => {
  const [path, setPath] = useState<PathFromRoot[]>();
  useEffect(() => {
    if (props.categories) {
      const categories = props.categories;
      getInfoForProductsBreadcrumb(categories).then((pathFromRoot) => {
        setPath(pathFromRoot);
      });
      return;
    }
    if (props.category) {
      const category = props.category;
      getInfoForItemBreadcrumb(category).then((pathFromRoot) => {
        setPath(pathFromRoot);
      });
      return;
    }
  }, []);
  return (
    <Root>
      {!path ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"inherit"}
          height={"inherit"}
        />
      ) : (
        <Breadcrumbs>
          {path.map((item, i) => {
            return <Text key={i}>{item.name}</Text>;
          })}
        </Breadcrumbs>
      )}
    </Root>
  );
};

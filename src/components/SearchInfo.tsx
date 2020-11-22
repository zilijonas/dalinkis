import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { searchCategory, searchCity, searchKey } from "../search/search-state";

interface Props {}

export const SearchInfo: React.FC<Props> = () => {
  const key = useRecoilValue(searchKey);
  const category = useRecoilValue(searchCategory);
  const city = useRecoilValue(searchCity);
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6">Key: {key}</Typography>
      <Typography variant="h6">Category: {category}</Typography>
      <Typography variant="h6">City: {city}</Typography>
    </Box>
  );
};

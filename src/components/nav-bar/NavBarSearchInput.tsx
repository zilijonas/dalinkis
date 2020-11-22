import React from 'react';
import {
  Box,
  createStyles,
  fade,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SearchState } from '../../search/search-state';

interface Props {
  onSearchUpdated(state: SearchState): void;
}

const mockedCategoryOptions = ['TV', 'Computer', 'Sports'];

const mockedCityOptions = ['Vilnius', 'Kaunas', 'Klaipeda'];

export const NavBarSearchInput: React.FC<Props> = ({ onSearchUpdated }) => {
  const classes = useStyles();
  const [key, setKey] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [selectedCity, setSelectedCity] = React.useState<string>('');

  React.useEffect(() => {
    onSearchUpdated({ key, category: selectedCategory, city: selectedCity });
  }, [key, selectedCategory, selectedCity, onSearchUpdated]);

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        color="primary"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleKeyChange}
        renderSuffix={() => (
          <Box display="flex" alignItems="center">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category-select" classes={{ root: classes.labelRoot, shrink: classes.labelShrink }}>
                Category
              </InputLabel>
              <Select
                classes={{ root: classes.select }}
                value={selectedCategory}
                name="category-select"
                id="category-select"
                onChange={handleCategoryChange}
                inputProps={{ 'aria-label': 'categories' }}
                input={<BootstrapInput />}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {mockedCategoryOptions.map(opt => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="city-select" classes={{ root: classes.labelRoot, shrink: classes.labelShrink }}>
                City
              </InputLabel>
              <Select
                classes={{ root: classes.select }}
                value={selectedCity}
                name="city-select"
                id="city-select"
                onChange={handleCityChange}
                inputProps={{ 'aria-label': 'categories' }}
                input={<BootstrapInput />}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {mockedCityOptions.map(opt => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton size="small">
              <SearchIcon color="primary" />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );

  function handleKeyChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    const key = event.target.value as string;
    setKey(key);
  }

  function handleCategoryChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    const category = event.target.value as string;
    setSelectedCategory(category);
  }

  function handleCityChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    const city = event.target.value as string;
    setSelectedCity(city);
  }
};

const BootstrapInput = withStyles(() =>
  createStyles({
    input: {
      position: 'relative',
      fontSize: 16,
      padding: 0,
      margin: 0,
    },
  }),
)(InputBase);

const useStyles = makeStyles(theme =>
  createStyles({
    search: {
      flexGrow: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.background.paper, 0.85),
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      color: theme.palette.primary.main,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    inputRoot: {
      width: '100%',
      flexGrow: 1,
      color: 'inherit',
      padding: theme.spacing(0, 1, 0, 2),
    },
    inputInput: {
      flexGrow: 1,
      padding: theme.spacing(1),
      textOverflow: 'ellipsis',
      transition: theme.transitions.create('width'),
      width: '100%',

      '&::placeholder': {
        color: theme.palette.primary.main,
        opacity: 0.75,
      },
    },
    formControl: {
      margin: theme.spacing(0, 1, 0),
      width: 180,
      backgroundColor: 'transparent !important',
      [theme.breakpoints.down('sm')]: {
        width: 140,
      },
      [theme.breakpoints.down('xs')]: {
        width: 80,
      },
    },
    select: {
      textOverflow: 'ellipsis',
      color: theme.palette.primary.main,
      marginTop: theme.spacing(0),
      background: 'none !important',
    },
    labelRoot: {
      marginTop: theme.spacing(0),
      transform: 'translate(0, 1px) scale(1)',
    },
    labelShrink: {
      transform: 'translate(0, 1px) scale(0, 1)',
    },
  }),
);

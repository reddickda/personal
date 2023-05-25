import {
  createStyles,
  Container,
  Tabs,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: 100
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tab: {
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: '#e31b6d',
    },
  },
}));

interface NavBarProps {
  tabs: string[];
}

export function NavBar({ tabs }: NavBarProps) {
  const { classes} = useStyles();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container>
        <Tabs
          defaultValue="Home"
          // variant="outline"
          classNames={{
            root: classes.tabs,
            // tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
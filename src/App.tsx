import { Center, Flex, Stack, Title, createStyles, keyframes } from '@mantine/core';
import './App.css'
import { ThreeCanvas } from './ThreeCanvas';
import { NavBar } from './NavBar';

const dropDownAnimation = keyframes({
  '0%': { transform: 'translateY(-300px)' },
  '70%': { transform: 'translateY(0px)' },
  '73%': { transform: 'translate(1px, 1px) rotate(0deg)' },
  '76%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
  '79%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
  '82%': { transform: 'translate(3px, 2px) rotate(0deg)' },
  '85%': { transform: 'translate(1px, -1px) rotate(1deg)' },
  '88%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
  '91%': { transform: ' translate(-3px, 1px) rotate(0deg)' },
  '94%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
  '97%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
  '99%': { transform: 'translate(1px, 2px) rotate(0deg)' },
  '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
})

const useStyles = createStyles((theme) => ({
  text: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1rem'
    },
  },
  dropIn: {
    animation: `${dropDownAnimation} 1s ease-in`,
    paddingLeft: 10,
    color: '#e31b6d',
    transition: 'transform 0.2s ease-out',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1rem',
      paddingLeft: 5,
    },
  },
  stack: {
    [theme.fn.smallerThan('sm')]: {
      width: 200
    },
    width: 424,
  }
}));

function App() {
  const { classes } = useStyles();
  return (
    <>
      <ThreeCanvas />
      <Center>
        <Stack className={classes.stack}>
          <Flex>
            <Title className={classes.text}>Hello, I am</Title><Title className={classes.dropIn}>David Reddick</Title>
          </Flex>
          <Title className={classes.text}>I am a full-stack developer</Title>
        </Stack>
      </Center>
      <NavBar tabs={['Projects', 'Experience']} />
      <Flex sx={{ height: 500 }}></Flex>
      <Flex>
          <Title>Projects</Title>
      </Flex>
      <Flex sx={{ height: 500 }}></Flex>
      <Flex>
          <Title>Experience</Title>
      </Flex>
      <Flex sx={{ height: 500 }}></Flex>
    </>
  )
}

export default App

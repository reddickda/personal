import { Center, Flex, Grid, Stack, Title, createStyles, keyframes } from '@mantine/core';
import './App.css'
import { ThreeCanvas } from './ThreeCanvas';
import { NavBar } from './NavBar';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import wayt from './assets/wayt.png';
import timezone from './assets/timezone.png';
import friendMap from './assets/friendmap.png';

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
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
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
      <NavBar tabs={[{ name: 'Projects', ref: projectsRef }, { name: 'Experience', ref: experienceRef }]} />
      <Flex sx={{ height: 500 }}></Flex>
      <Stack>
        <Title ref={projectsRef}>Projects</Title>
        <Grid>
          <Grid.Col span={5}>
            <ProjectCard project={{ link: "https://reddickda.github.io/where-are-you-tall/", source: wayt, description: "Find out where in the world you are tall", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col span={5}>
            <ProjectCard project={{ link: "https://reddickda.github.io/timezoneTracker/", source: timezone, description: "Find out what timezone you are in", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col span={5}>
            <ProjectCard project={{ link: "", source: friendMap, description: "Follow your friends across the globe!", cta: undefined }} />
          </Grid.Col>
        </Grid>
      </Stack>
      <Flex sx={{ height: 500 }}></Flex>
      <Stack>
        <Title ref={experienceRef}>Experience</Title>
        <Stack>
          <h3>Sirrus7</h3>
          <p>
            Built and maintained high traffic, event-driven, C# .Net cloud hosted applications at scale for Starbucks. Created and maintained the CI/CD pipelines in devops.
          </p>
          <h3>Quest Mindshare LLC</h3>
          <p>
            Built a React + TS app with a GraphQL bffy layer, and an express backend for the online research industry
          </p>
          <h3>Leap Orbit LLC</h3>
          <p>
            Worked on a React SPA supported by a .Net core back-end of microservices that is used by over 150,000 physicians a day
          </p>
          <h3>SafeNet Technologies</h3>
          <p>
            Developed front-end GUI in Java for integration team testing, ease-of-use, and customer demos
          </p>
          <h3>MyQvo</h3>
          <p>
            Designed and developed 2D games for a mobile application suite using Unity3D, C#, and SQL
          </p>
        </Stack>
      </Stack>
      <Flex sx={{ height: 500 }}></Flex>
    </>
  )
}

export default App

import { ActionIcon, Center, Flex, Grid, Stack, Title, createStyles, keyframes } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useRef, lazy } from 'react';
import './App.css'
import { NavBar } from './NavBar';
import { ProjectCard } from './ProjectCard';
import wayt from './assets/wayt.png';
import timezone from './assets/timezone.png';
import friendMap from './assets/friendmap.png';
import robotGame from './assets/robotgame.png';
import rushHour from './assets/rushhour.jpg';
import cfc from './assets/cfc.jpg';

const ThreeCanvasPreview = lazy(() => import('./ThreeCanvas.tsx'));

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
    paddingBottom: 300,
    paddingTop: 100,
  }
}));

function App() {
  const { classes } = useStyles();
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <>
      <ThreeCanvasPreview />
      <Center>
        <Stack className={classes.stack}>
          <Flex>
            <Title className={classes.text}>Hello, I am</Title><Title className={classes.dropIn}>David Reddick</Title>
          </Flex>
          <Title className={classes.text}>I am a full-stack developer</Title>
        </Stack>
      </Center>
      <NavBar tabs={[{ name: 'My Work', ref: projectsRef }, { name: 'Contact', ref: contactMeRef }]} />
      <Stack pb={300}>
        <Title ref={projectsRef}>My Work</Title>
        <Grid sx={{ justifyContent:'center' }}>
        <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://columbiafc.club/", source: cfc, description: "My local amatuer soccer team's site", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://whereareyoutall.com/", source: wayt, description: "Find out where in the world you are tall", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://reddickda.github.io/rushHour", source: rushHour, description: "Configure and solve Rush Hour Traffic using a BFS approach.", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://reddickda.github.io/timezoneTracker/", source: timezone, description: "Find out what timezone you are in", cta: "Check out the project" }} />
          </Grid.Col>
          <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://davidrportfolio.netlify.app/", source: robotGame, description: "My 2019 Portfolio V1", cta: "Play around with some stuff" }} />
          </Grid.Col>
          <Grid.Col sm={6} md={5}>
            <ProjectCard project={{ link: "https://main.d243sszublig3p.amplifyapp.com/", source: friendMap, description: "Follow your friends across the globe!", cta: "Social Media Application in alpha" }} />
          </Grid.Col>
        </Grid>
      </Stack>
      {/* <Stack pb={300}>
        <Title ref={experienceRef}>Experience</Title>
        <Stack>
          <h3>Sirrus7 September | 2022 - present</h3>
          <p>
            Built and maintained high traffic, event-driven, C# .Net cloud hosted applications at scale for Starbucks. Created and maintained the CI/CD pipelines in devops, wrote detailed unit tests for new and legacy applications.
          </p>
          <h3>Cicadda inc. | April 2023 - present</h3>
          <p>
            Co-founder, senior software engineer, Developing TypeScript and React application utilizing Firebase as a backend, enabling teachers to
            incorporate Generative AI technology for peer-review of in-class assignments.
            Creating a suite a line-of-business tools leveraging Generative AI to assist in multiple industries.
          </p>
          <h3>Quest Mindshare LLC | November 2021-September 2022</h3>
          <p>
            Built a React + TS app with a GraphQL bffy layer, and an express backend for the online research industry. Responsible for design and maintaining migrations of the RDBMs.
            Developed a time-saving automation tool hosted on Google Cloud, streamlining the integration process by mapping non-standard client datasets to the company's proprietary dataset.
            Significantly reduced manual effort, saving hours of work for the team 
          </p>
          <h3>Leap Orbit LLC | January 2019 - November 2021</h3>
          <p>
            Worked on a React SPA supported by a .Net core back-end of microservices that is used by over 150,000 physicians a day
          </p>
          <h3>SafeNet Technologies | May 2017 - April 2018</h3>
          <p>
            Developed front-end GUI in Java, using Spring, for integration team testing, ease-of-use, and customer demos
          </p>
          <h3>MyQvo | May 2015 - August 2016</h3>
          <p>
            Designed and developed 2D games for a mobile application suite using Unity, C#, and SQL
          </p>
        </Stack>
      </Stack> */}
      <Stack pb={20}>
      <Title ref={contactMeRef}>Want a site like any of these? Lets talk!</Title>
      <Center>
        reddickdav@gmail.com
          <ActionIcon onClick={() => window.location.href='https://www.linkedin.com/in/david-reddick-80a699104/'} size="lg">
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
      </Center>
      </Stack>
    </>
  )
}

export default App

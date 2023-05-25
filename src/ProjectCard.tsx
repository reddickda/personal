import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

export interface ProjectCardProps {
  project: {
    source: string;
    description: string;
    link: string;
    cta: string | undefined;
  }
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={project.source}
          height={300}
          alt={project.cta || 'work in progress...'}
        />
      </Card.Section>
      <Text size="sm" color="dimmed">
        {project.description}
      </Text>
      <Button disabled={!project.cta} component='a' href={project.link} variant="light" color="blue" fullWidth mt="md" radius="md" leftIcon={<IconExternalLink size="0.9rem" />}>
        {project.cta || 'Work in progress...'}
      </Button>
    </Card>
  );
}
import chalk from 'chalk';
import type { Portfolio } from './types';

export function showAbout(data: Portfolio): void {
  console.log(chalk.cyan.bold('\nAbout\n'));
  console.log(chalk.white(data.about.bio + '\n'));

  console.log(chalk.cyan.bold('Highlights\n'));
  for (const highlight of data.about.highlights) {
    console.log(chalk.green('⇢ ') + chalk.gray(highlight));
  }
  console.log();
}

export function showSkills(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n-  Skills\n'));

  for (const [category, skills] of Object.entries(data.skills)) {
    console.log(chalk.yellow.bold('  ' + category));
    console.log(chalk.gray('  ' + skills.join('·')) + '\n');
  }
}

export function showProjects(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n- Projects\n'));

  data.projects.forEach((project, i) => {
    console.log(chalk.white.bold(`${i + 1}. ${project.name}`));
    console.log(chalk.gray(`${project.description}`));
    console.log(chalk.blue.underline(`${project.url}`));
    console.log(chalk.yellow(`${project.tech.join(' · ')}`));
    console.log();
  });
}

export function showExperience(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n-  Experience\n'));

  for (const job of data.experience) {
    console.log(chalk.white.bold(`${job.title}`));
    console.log(chalk.yellow(`  ${job.company}`));
    console.log(chalk.gray(`  ${job.period}` + '\n'));
    job.description.forEach((desc, i) => {
      console.log(chalk.white(`  ${i + 1}. ${desc}` + '\n'));
    });
    console.log();
  }
}

export function showContact(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n- Contact\n'));

  const lines: [string, string][] = [
    ['Email', data.contact.email],
    ['GitHub', data.contact.github],
    ['LinkedIn', data.contact.linkedin],
  ];

  if (data.contact.portfolio) {
    lines.push(['Website', data.contact.portfolio]);
  }

  for (const [label, value] of lines) {
    console.log(chalk.gray(`  ${label.padEnd(10)}`) + chalk.cyan(value));
  }
  console.log();
}

export function showHelp(): void {
  console.log(chalk.cyan.bold('\n  Commands\n'));

  const commands: [string, string][] = [
    ['about', 'Who I am'],
    ['skills', 'What I work with'],
    ['projects', 'Things I built'],
    ['experience', 'Where I worked'],
    ['contact', 'How to reach me'],
    ['help', 'Show this menu'],
    ['exit', 'Quit'],
  ];

  for (const [cmd, desc] of commands) {
    console.log(chalk.yellow(`  ${cmd.padEnd(14)}`) + chalk.gray(desc));
  }
  console.log();
}

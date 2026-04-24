import chalk from 'chalk';
import type { Portfolio } from './types.js';

export function showAbout(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n  Hey, nice to meet you 👋\n'));
  console.log(chalk.white('  ' + data.about.bio + '\n'));

  console.log(chalk.cyan.bold('  Highlights\n'));
  for (const highlight of data.about.highlights) {
    console.log(chalk.cyan('  ⇢ ') + chalk.white(highlight));
  }
  console.log();
}

export function showSkills(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n  Here is what I work with\n'));

  for (const [category, skills] of Object.entries(data.skills)) {
    console.log(chalk.yellow.bold('  ' + category));
    console.log(chalk.white('  ' + skills.join('  ·  ')) + '\n');
  }
}

export function showProjects(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n  Things I have built\n'));

  data.projects.forEach((project, i) => {
    console.log(chalk.yellow.bold(`  ${i + 1}. ${project.name}`));
    console.log(chalk.white(`     ${project.description}`));
    console.log('     ' + chalk.blue.underline(`${project.url}`));
    console.log(chalk.cyan(`     ${project.tech.join(' · ')}`));
    console.log();
  });
}

export function showExperience(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n  Where I have been\n'));

  for (const job of data.experience) {
    console.log(chalk.yellow.bold(`  ${job.title}`));
    console.log(chalk.white(`  ${job.company}`) + chalk.gray(`  ·  ${job.period}`));
    console.log();
    job.description.forEach((desc) => {
      console.log(chalk.white(`    ◦ ${desc}`));
    });
    console.log();
  }
}

export function showContact(data: Portfolio): void {
  console.log(chalk.cyan.bold('\n  Lets connect\n'));

  const lines: [string, string][] = [
    ['Email', data.contact.email],
    ['GitHub', data.contact.github],
    ['LinkedIn', data.contact.linkedin],
  ];

  if (data.contact.portfolio) {
    lines.push(['Portfolio', data.contact.portfolio]);
  }

  for (const [label, value] of lines) {
    console.log(chalk.yellow(`  ${label.padEnd(12)}`) + chalk.white(value));
  }
  console.log();
}

export function showHelp(): void {
  console.log(chalk.cyan.bold('\n  Here is what you can do\n'));

  const commands: [string, string][] = [
    ['about', 'Who I am'],
    ['skills', 'What I work with'],
    ['projects', 'Things Ive built'],
    ['experience', 'Where Ive been'],
    ['contact', 'Lets connect'],
    ['help', 'Show this menu'],
    ['exit', 'Quit'],
  ];

  for (const [cmd, desc] of commands) {
    console.log(chalk.yellow(`  ${cmd.padEnd(16)}`) + chalk.white(desc));
  }
  console.log();
}

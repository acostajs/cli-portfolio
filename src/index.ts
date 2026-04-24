#!/usr/bin/env node

import { program } from 'commander';
import { portfolio } from './data.js';
import {
  showAbout,
  showSkills,
  showProjects,
  showExperience,
  showContact,
  showHelp,
} from './display';
import { printHeader, printFooter } from './ui.js';
import { runInteractive } from './interactive.js';

program
  .name(portfolio.name.toLowerCase().replace(' ', '-'))
  .description('Interactive CLI portfolio')
  .version('0.0.1');

program
  .command('about')
  .description('Who I am')
  .action(() => {
    printHeader();
    showAbout(portfolio);
    printFooter();
  });

program
  .command('skills')
  .description('What I work with')
  .action(() => {
    printHeader();
    showSkills(portfolio);
    printFooter();
  });

program
  .command('projects')
  .description('Things I built')
  .action(() => {
    printHeader();
    showProjects(portfolio);
    printFooter();
  });

program
  .command('experience')
  .description('Where I worked')
  .action(() => {
    printHeader();
    showExperience(portfolio);
    printFooter();
  });

program
  .command('contact')
  .description('How to reach me')
  .action(() => {
    printHeader();
    showContact(portfolio);
    printFooter();
  });

program
  .command('help')
  .description('Show all commands')
  .action(() => {
    printHeader();
    showHelp();
    printFooter();
  });

if (process.argv.length === 2) {
  void runInteractive();
} else {
  program.parse(process.argv);
}

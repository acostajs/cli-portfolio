import chalk from 'chalk';
import enquirer from 'enquirer';
import { portfolio } from './data.js';
import {
  showAbout,
  showSkills,
  showProjects,
  showExperience,
  showContact,
  showHelp,
} from './display.js';
import { clearScreen, printDivider, printFooter } from './ui.js';

type MenuChoice = 'about' | 'skills' | 'projects' | 'experience' | 'contact' | 'help' | 'exit';

const menuChoices: { name: MenuChoice; message: string }[] = [
  { name: 'about', message: '- About' },
  { name: 'skills', message: '- Skills' },
  { name: 'projects', message: '- Projects' },
  { name: 'experience', message: '- Experience' },
  { name: 'contact', message: '- Contact' },
  { name: 'help', message: '- Help' },
  { name: 'exit', message: '- Exit' },
];

const handlers: Record<Exclude<MenuChoice, 'exit'>, () => void> = {
  about: () => showAbout(portfolio),
  skills: () => showSkills(portfolio),
  projects: () => showProjects(portfolio),
  experience: () => showExperience(portfolio),
  contact: () => showContact(portfolio),
  help: () => showHelp(),
};

export async function runInteractive(): Promise<void> {
  clearScreen();

  console.log(
    chalk.white('  You just ran ') + chalk.cyan('npx meet-juan') + chalk.white(' — good taste.')
  );
  console.log(chalk.white('  Take a look around.'));
  console.log(chalk.gray('\n  ↕  Arrow keys to move · Enter to select\n'));
  printFooter();
  printDivider();

  let running = true;

  while (running) {
    try {
      const { choice } = await enquirer.prompt<{ choice: MenuChoice }>({
        type: 'select',
        name: 'choice',
        message: 'What are you curious about?',
        choices: menuChoices,
      });

      if (choice === 'exit') {
        clearScreen();
        console.log(chalk.cyan('\n  Great having you here. See you around! 👋\n'));
        running = false;
        break;
      }

      clearScreen();
      handlers[choice]();
      printDivider();
    } catch {
      clearScreen();
      console.log(chalk.cyan('\n  Great having you here. See you around! 👋\n'));
      running = false;
      break;
    }
  }
}

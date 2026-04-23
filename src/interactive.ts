import chalk from 'chalk';
import enquirer from 'enquirer';
import { portfolio } from './data';
import {
  showAbout,
  showSkills,
  showProjects,
  showExperience,
  showContact,
  showHelp,
} from './display';
import { clearScreen, printDivider } from './ui';

type MenuChoice =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'contact'
  | 'clear'
  | 'help'
  | 'exit';

const menuChoices: { name: MenuChoice; message: string }[] = [
  { name: 'about', message: '- About' },
  { name: 'skills', message: '- Skills' },
  { name: 'projects', message: '- Projects' },
  { name: 'experience', message: '- Experience' },
  { name: 'contact', message: '- Contact' },
  { name: 'clear', message: '- Clear' },
  { name: 'help', message: '- Help' },
  { name: 'exit', message: '- Exit' },
];

const handlers: Record<Exclude<MenuChoice, 'exit'>, () => void> = {
  about: () => showAbout(portfolio),
  skills: () => showSkills(portfolio),
  projects: () => showProjects(portfolio),
  experience: () => showExperience(portfolio),
  contact: () => showContact(portfolio),
  clear: () => clearScreen(),
  help: () => showHelp(),
};

export async function runInteractive(): Promise<void> {
  clearScreen();

  console.log(chalk.gray('\n ↕ Use arrow keys to navigate\n'));

  let running = true;

  while (running) {
    try {
      const { choice } = await enquirer.prompt<{ choice: MenuChoice }>({
        type: 'select',
        name: 'choice',
        message: 'What would you like to see?',
        choices: menuChoices,
      });

      if (choice === 'exit') {
        clearScreen();
        console.log(chalk.cyan('\n  Thanks for visiting! 👋\n'));
        running = false;
        break;
      }

      clearScreen();
      handlers[choice]();
      printDivider();
    } catch {
      clearScreen();
      console.log(chalk.cyan('\n  Thanks for visiting! 👋\n'));
      running = false;
      break;
    }
  }
}

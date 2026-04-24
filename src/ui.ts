import chalk from 'chalk';
import figlet from 'figlet';
import { portfolio } from './data.js';

export function clearScreen(): void {
  console.clear();
  printHeader();
}

export function printHeader(): void {
  const name = figlet.textSync(portfolio.name, { font: 'Ogre' });
  const title = figlet.textSync(portfolio.title, { font: 'Standard' });

  console.log('');
  console.log(chalk.white(name));
  console.log(chalk.white(title));
  printDivider();
}

export function printDivider(): void {
  console.log(chalk.gray('─'.repeat(100)));
}

export function printFooter(): void {
  printDivider();
  console.log(chalk.gray('  Pick "Help" to see all available commands'));
}

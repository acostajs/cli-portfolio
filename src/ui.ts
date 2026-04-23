import chalk from 'chalk';
import figlet from 'figlet';
import { portfolio } from './data';

export function clearScreen(): void {
  console.clear();
  printHeader();
}

export function printHeader(): void {
  const name = figlet.textSync(portfolio.name, { font: 'ogre' });
  const title = figlet.textSync(portfolio.title, { font: 'standard' });

  console.log('');
  console.log(chalk.white(name));
  console.log(chalk.white(title));
}

export function printDivider(): void {
  console.log(chalk.gray('─'.repeat(48)));
}

export function printFooter(): void {
  printDivider();
  console.log(chalk.gray('  Choose "Help" to see all commands\n'));
}

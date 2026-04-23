import chalk from 'chalk';
import { portfolio } from './data';

export function clearScreen(): void {
  console.clear();
  printHeader();
}

export function printHeader(): void {
  const width = 46;
  const name = portfolio.name;
  const title = portfolio.title;

  console.log(chalk.cyan('╔' + '═'.repeat(width) + '╗'));
  console.log(chalk.cyan('║') + ' '.repeat(width) + chalk.cyan('║'));
  console.log(
    chalk.cyan('║') +
      chalk.white.bold(name.padStart((width + name.length) / 2).padEnd(width)) +
      chalk.cyan('║')
  );
  console.log(
    chalk.cyan('║') +
      chalk.gray(title.padStart((width + title.length) / 2).padEnd(width)) +
      chalk.cyan('║')
  );
  console.log(chalk.cyan('║') + ' '.repeat(width) + chalk.cyan('║'));
  console.log(chalk.cyan('╚' + '═'.repeat(width) + '╝'));
}

export function printDivider(): void {
  console.log(chalk.gray('─'.repeat(48)));
}

export function printFooter(): void {
  printDivider();
  console.log(chalk.gray('  Choose "Help" to see all commands\n'));
}

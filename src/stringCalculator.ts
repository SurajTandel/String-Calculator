export function add(numbers: string): number {
  if (!numbers) return 0;
  console.log(numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0));
  return numbers
    .split(/[\n,]/)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah' = 'cel',
    outputType: 'cel' | 'fah' = 'fah',
  ): string {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = (val * 9) / 5 + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = ((val - 32) * 5) / 9;
    } else {
      outputTemp = val;
    }


    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°F' : '°C';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}

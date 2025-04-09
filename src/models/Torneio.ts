import logger from '../utils/logger';
import { Partida } from './Partida';

interface TimeData {
  pontos: number;
}

export class Torneio {
  private times: Record<string, TimeData> = {};
  private partidas: Partida[] = [];

  adicionarTime(nome: string): void {
    try {
      if (!nome || nome.trim() === '') throw new Error('Nome inválido');

      if (this.times[nome]) {
        console.log(`ℹ️ Time "${nome}" já registrado.`);
        return;
      }

      this.times[nome] = { pontos: 0 };
      console.log(`✅ Time "${nome}" adicionado com sucesso!`);
    } catch (err: any) {
      console.log(`❌ Erro: ${err.message}`);
      logger.error(err.message);
    }
  }

  criarPartida(
    timeA: string,
    timeB: string,
    golsA: number,
    golsB: number
  ): void {
    try {
      if (!this.times[timeA] || !this.times[timeB])
        throw new Error('Time não existe');
      if (golsA < 0 || golsB < 0) throw new Error('Número inválido de gols');

      const partida = new Partida(timeA, timeB, golsA, golsB);
      this.partidas.push(partida);

      if (golsA > golsB) this.times[timeA].pontos += 3;
      else if (golsB > golsA) this.times[timeB].pontos += 3;
      else {
        this.times[timeA].pontos += 1;
        this.times[timeB].pontos += 1;
      }

      console.log(
        `✅ Partida entre "${timeA}" e "${timeB}" criada com sucesso!`
      );
    } catch (err: any) {
      console.log(`❌ Erro: ${err.message}`);
      logger.error(err.message);
    }
  }

  jogar() {
    return {
      imprimirClassificacao: () => {
        console.log('\nClassificação Final:');
        const ranking = Object.entries(this.times).sort(
          (a, b) => b[1].pontos - a[1].pontos
        );

        ranking.forEach(([time, dados], index) => {
          console.log(`${index + 1}. ${time} (${dados.pontos} pontos)`);
        });
      },
      imprimirResultados: () => {
        console.log('\nResultados:');
        this.partidas.forEach((p) => {
          console.log(p.resultado());
        });
      },
    };
  }
}

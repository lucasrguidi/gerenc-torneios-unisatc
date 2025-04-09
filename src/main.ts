import { Torneio } from './models/Torneio';

const torneio = new Torneio();

torneio.adicionarTime('Brasil');
torneio.adicionarTime('');
torneio.adicionarTime('Canadá');
torneio.adicionarTime('Argentina');
torneio.adicionarTime('Angola');

torneio.criarPartida('Brasil', 'Canadá', 1, 0);
torneio.criarPartida('Argentina', 'Angola', 0, 1);
torneio.criarPartida('Brasil', 'Argentina', -10, -2);
torneio.criarPartida('Brasil', 'Argentina', 0, 2);
torneio.criarPartida('Angola', 'Canadá', 1, 1);
torneio.criarPartida('Brasil', 'Angola', 3, 2);
torneio.criarPartida('Argentina', 'Nigéria', 3, 3);
torneio.criarPartida('Argentina', 'Canadá', 2, 4);

const resultados = torneio.jogar();
resultados.imprimirClassificacao();
resultados.imprimirResultados();

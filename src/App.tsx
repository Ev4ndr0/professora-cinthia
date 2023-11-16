import { Eraser, Github, Wand2 } from 'lucide-react';
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from './components/ui/input';
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import logo from './public/professora_mo.png';

export function App() {
  const [qtdCriancas, setQtdCriancas] = useState(0)
  const [nrDiasLetivos, setNrDiasLetivos] = useState(0)
  const [qtdTotalFaltas, setQtdTotalFaltas] = useState(0)
  const [frequenciaMedia, setFrequenciaMedia] = useState(0)


  function handleCriancas(e: any) {
    setQtdCriancas(e.target.value);
  }
  function handleDias(e: any) {
    setNrDiasLetivos(e.target.value);
  }
  function handleFaltas(e: any) {
    setQtdTotalFaltas(e.target.value);
  }

  function handleCalculoFrequencia() {
    let $nr_x = qtdCriancas * nrDiasLetivos;
    let $nr_z = $nr_x - qtdTotalFaltas;

    if ($nr_x && $nr_z)
      setFrequenciaMedia(Math.ceil(($nr_z / nrDiasLetivos * 100) / qtdCriancas));

  }

  function clearValues() {
    setQtdCriancas(0);
    setNrDiasLetivos(0);
    setQtdTotalFaltas(0);
    setFrequenciaMedia(0);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Calculo Frequência Média da Classe</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por Evandro Macedo
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <aside className="w-full space-y-2">
          <form className="space-y-6">
            <div className="flex flex-col flex-1 gap-4">
              <div className="grid grid-rows-4 gap-4 flex-1">
                <div className="grid w-full max-w-sm items-center gap-2">
                  <div className="space-y-1">
                    <Label>Quantidade de crianças</Label>
                    <Input type="number" id="qtd_criancas" placeholder="Quantidade de crianças"
                      onChange={handleCriancas} value={qtdCriancas} min={1} max={40} />
                  </div>
                  <Separator />
                  <div className="space-y-1">
                    <Label>Quantidade de dias letivos do mês</Label>
                    <Input type="number" id="nr_dias_letivos" placeholder="Quantidade de Dias Letivos"
                      onChange={handleDias} value={nrDiasLetivos} min={1} max={40} />
                  </div>
                  <Separator />
                  <div className="space-y-1">
                    <Label>Quantidade total de faltas no mês</Label>
                    <Input type="number" id="qtd_total_faltas" placeholder="Quantidade total de faltas"
                      onChange={handleFaltas} value={qtdTotalFaltas} min={1} max={365} />
                  </div>
                </div>
                <div className="space-y-1">
                  <Button onClick={handleCalculoFrequencia} type="button" className="w-100 text-white bg-sky-500/100 ">
                    Calcular
                    <Wand2 className="w-4 h-4 ml-2" />
                  </Button>
                  <Button onClick={clearValues} type="button" className="w-100 m-3">
                    Limpar
                    <Eraser className="w-4 h-4 ml-4" />
                  </Button>
                </div>
              </div>

            </div>
          </form>
        </aside>
        <aside className="w-full space-y-2">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">
              A Frequência Média da Classe é <span className='text-blue-700'>{frequenciaMedia} </span>%
            </h1>
          </div>
        </aside>
        <div className="w-25 h-4 mr-2" >
          <img src={logo} alt='professoa' />
        </div>
      </main>
    </div>
  )
}

<<<<<<< HEAD
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github,
  Home,
  LogOut,
  Package,
  Settings2,
  ShoppingBag,
  Users,
  Wand2
} from 'lucide-react';
import Link from "next/link";
=======
import { Eraser, Github, Wand2 } from 'lucide-react';
>>>>>>> 43676f568c4904c02e530cb98b490a68a8028e6a
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from './components/ui/input';
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import logo from '/public/professora_mo.png';

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
    <>
      <div className="flex w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                        text-primary-foreground rounded-full"
              >
                <Package className="h-4 w-4" />
                <span className="sr-only">Dashboard Avatar</span>
              </Link>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Inicio</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Inicio</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Pedido</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Pedido</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    <span className="sr-only">Produto</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Produto</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                        text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Users className="h-5 w-5" />
                    <span className="sr-only">Clientes</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Clientes</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
              text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Settings2 className="h-5 w-5" />
                    <span className="sr-only">Configurações</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Configurações</TooltipContent>
              </Tooltip>

            </TooltipProvider>
          </nav>

          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
              text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5 text-red-500" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Sair</TooltipContent>
              </Tooltip>

            </TooltipProvider>

          </nav>
        </aside>
        <div className="sm: ml-14 px-6 py-3 flex items-center justify-between border-b">
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
      </div>
      <div className="min-h-screen flex flex-col">
        <main className="sm: ml-14 flex-1 p-6 flex gap-6">
          <aside className="w-full space-y-2">
            <form className="space-y-6">
              <div className="flex flex-col flex-1 gap-4">
                <div className="grid grid-rows-4 gap-4 flex-1">
                  <div className="grid w-full max-w-sm items-center gap-2">
                    <div className="space-y-1">
                      <Label>Quantidade de crianças</Label>
                      <Input type="number" id="qtd_criancas" placeholder="Quantidade de crianças"
                        onChange={handleCriancas} min={1} max={40} />
                    </div>
                    <Separator />
                    <div className="space-y-1">
                      <Label>Quantidade de Dias Letivos</Label>
                      <Input type="number" id="nr_dias_letivos" placeholder="Quantidade de Dias Letivos"
                        onChange={handleDias} min={1} max={40} />
                    </div>
                    <Separator />
                    <div className="space-y-1">
                      <Label>Quantidade total de faltas</Label>
                      <Input type="number" id="qtd_total_faltas" placeholder="Quantidade total de faltas"
                        onChange={handleFaltas} min={1} max={365} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Button onClick={handleCalculoFrequencia} type="button" className="w-100">
                      Calcular
                      <Wand2 className="w-4 h-4 ml-2" />
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
          <div className="w-30 h-4 mr-2" >
            <img src={logo} alt='professoa' />
          </div>
        </main>
      </div>
    </>
  )
}

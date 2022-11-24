import { PackageCELista } from "./PackageCELista";
import { PackageForm } from "./PackageForm";

import { ListGrafo } from "./ListGrafo";

import { packageCE as data } from "./data/packageCE";
import { grafo as graphData } from "./data/grafo";

/* import { centros as dataCe } from "./data/centros"; */
import { GrafoTesteo } from "./GrafoTesteo";

import { FormularioNodos } from "./FormularioNodos";
import { SelecionarRuta } from "./SelecionarRuta";

import { useState, useEffect } from "react";
import { rutas as rutasData } from "./data/rutas";

import { DashBoard } from "./Dashboard";

import {
  Button,
  ProgressBar,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Card,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  const [packageCEs, setPackageCEs] = useState([]);
  const [graph, setGraph] = useState("");
  const [rutas, setRutas] = useState([]);
  const [entregados, setEntregados] = useState(0)
  const [solicitados, setSolicitados] = useState(0)
  const [pendientes, setPendientes] = useState(0)

  useEffect(() => {
    setRutas(rutasData);
  }, []);

  useEffect(() => {
    setPackageCEs(data);
  }, []);

  useEffect(() => {
    setGraph(graphData);
  }, []);

  function createPackage(packageTitle, maxProgress,packageSalida,packageLlegada) {
    setPackageCEs([
      ...packageCEs,
      {
        title: packageTitle,
        id: packageCEs.length,
        description: "Enviado desde "+packageSalida+" hasta "+packageLlegada,
        maxProgress: maxProgress,
        salida:packageSalida,
        llegada:packageLlegada
      },
    ]);
  }

  function deletePackageCE(packageCEId) {
    //console.log(packageCEId);
    setPackageCEs(packageCEs.filter((packageCE) => packageCE.id !== packageCEId)); //Es como un if
  }

  function addNode(nodo, conexion, peso) {
    setGraph(
      graph + (nodo + " -> " + conexion + " " + "[label=" + peso + "]" + ";")
    );
    // console.log(rutas);
  }

  function deleteNode(nodo, conexion, peso) {
    const eleminate = nodo + " -> " + conexion + " [label=" + peso + "]";
    let spliteo = graph.split(";");
    console.log(spliteo);
    const filter = spliteo.filter((value) => value !== eleminate);
    console.log(filter);
    const result = filter.join(";");
    console.log(result);

    setGraph(result);

  }

  function sumEntregados(){
    let entre = entregados + 1;
    setEntregados(entre);
  }

  function sumSolicitados(){
    let soli = solicitados + 1;
    setSolicitados(soli);
  }

  function sumPendientes(value){
    let pen = pendientes;
    if (value == 0){
      pen += 1;
    }
    else{
      pen -= 1;
    }
    setPendientes(pen);
  }

  return (
    <>
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Rappi CE</Navbar.Brand>
          </Container>
        </Navbar>
      </header>


      <body>
        <main>
          <Container>
            <Row className="px-4 my-5">

              <Col>
                {/* Este es el grafo, igual buscarlo en el archivo */}
                  <GrafoTesteo grafo={"digraph G {" + graph + "}"}></GrafoTesteo>
                </Col>
                
                <Col>
                  <DashBoard solicitados={solicitados} pendientes={pendientes} entregados={entregados}/>
                  <Row>
                    <PackageCELista packageCEs={packageCEs} deletePackageCE={deletePackageCE} sumPendientes={sumPendientes} sumEntregados={sumEntregados} />
                    <SelecionarRuta rutas={rutas} />
                  </Row>
                </Col>

              {/* Esto no se si ira o no al final */}
              <Col>

              </Col>

             
            </Row>


            <Row className="px-4 my-5">
              <Col>{/* Aqui esta el formulario de los nodo, se busca el archivo Formulario nodos */}
                <FormularioNodos addNode={addNode} deleteNode={deleteNode} />
                <hr></hr>
                {/* Formulario de los paquetes */}
                <PackageForm createPackage={createPackage} sumSolicitados={sumSolicitados} sumPendientes={sumPendientes}/>
              </Col>

              <hr>

              </hr>

            </Row>
          </Container>
        </main>
      </body>
    </>
  );
}

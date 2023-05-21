import { ProductCards } from "../ProductCards";
import { Summary } from "../Summary";

import { Container } from "./styles";
import { Layout } from "../../layouts/default";
import { Sidebar } from "../Sidebar";

export function Dashboard() {
    return (
      <Layout>
        <Container>
          <Sidebar />
          <Summary />
          <ProductCards />
        </Container>
      </Layout>
    );
}
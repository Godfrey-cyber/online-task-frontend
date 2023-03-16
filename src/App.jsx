import Section from "./components/Section.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Clients from "./components/Clients.jsx"
import AddProject from "./components/AddProject.jsx"
import Register from "./components/Register.jsx"
import NotFound from "./components/NotFound.jsx"
import ProjectDetails from "./components/ProjectDetails.jsx"
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming
                    }
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming
                    }
                }
            }
        }
    }
})
const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache
})

const App = () => {
  return (
    <div className="h-full w-full flex flex-col relative">
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/add_project" element={<AddProject />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/:id" element={<ProjectDetails />} />
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    </div>
  )
}

export default App

import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
    };

    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: data => {
        this.setState({
          todos: data,
        });
      },
      error: (xhr, status, err) => {
        Error(err);
      },
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        },
      ],
    });
  }

  handleAddProject(project) {
    const { projects } = this.state;
    projects.push(project);
    this.setState({ projects });
  }

  handleDeleteProject(id) {
    const { projects } = this.state;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects });
  }

  render() {
    const { todos, projects } = this.state;
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <Projects projects={projects} onDelete={this.handleDeleteProject} />
        <hr />
        <Todos todos={todos} />
      </div>
    );
  }
}

export default App;

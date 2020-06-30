import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do reposiório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55397252?s=460&u=8cdfc8b57652f96e374fdbc3b9017354dea44824&v=4"
            alt="Yuri Weilemann"
          />
          <div>
            <strong>rocketseat/unform</strong>
          </div>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

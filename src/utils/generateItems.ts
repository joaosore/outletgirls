import { faker } from '@faker-js/faker';

interface ICourseDTO {
  key: string;
  id: number;
  name: string;
}

// Função para gerar um usuário fictício
const generateFakeCourse = (): ICourseDTO => {
  const course: ICourseDTO = {
    key: String(faker.number.int()),
    id: faker.number.int(),
    name: faker.company.name(),
  };
  return course;
};

export { generateFakeCourse };

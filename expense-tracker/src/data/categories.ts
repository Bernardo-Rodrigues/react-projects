import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true},
    buy: { title: 'Compra', color: 'red', expense: true},
    salary: { title: 'Salário', color: 'green', expense: false},
    extra: { title: 'Extra', color: 'green', expense: false}
}
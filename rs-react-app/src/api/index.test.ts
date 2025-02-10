import { Film } from '../models/film';
import { DataResponse, fetchFilms, fetchFilmsById } from './index';
import { describe, it, expect } from 'vitest';
describe('API', () => {
  it('fetchFilms should get all films', async () => {
    const response = await fetchFilms();
    expect((response as DataResponse).results.length).toEqual(6);
  });

  it('fetchFilmsById should get film by id', async () => {
    const id = 2;
    const response = await fetchFilmsById(id);
    expect((response as Film).title).toEqual('The Empire Strikes Back');
  });
});

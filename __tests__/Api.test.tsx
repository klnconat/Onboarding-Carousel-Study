// __tests__/service.test.ts
import axios from 'axios';
import service from '../src/api/service';

jest.mock('axios');

describe('fetchCategoryData', () => {
  it('fetches successfully data from an API', async () => {
    const data = { key: 'value' };
    (axios.get as jest.Mock).mockResolvedValue({ data });

    const result = await service.getCategories();
    console.log(result);
    expect(result.data).toEqual(data);
  });

  it('throws an error when the network response is not ok', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Network response was not ok'));

    await expect(service.getCategories()).rejects.toThrow('Network response was not ok');
  });
});

describe('fetchQuestionData', () => {
    it('fetches successfully data from an API', async () => {
      const data = { key: 'value' };
      (axios.get as jest.Mock).mockResolvedValue({ data });
  
      const result = await service.getQuestions();
      console.log(result);
      expect(result.data).toEqual(data);
    });
  
    it('throws an error when the network response is not ok', async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error('Network response was not ok'));
  
      await expect(service.getQuestions()).rejects.toThrow('Network response was not ok');
    });
  });
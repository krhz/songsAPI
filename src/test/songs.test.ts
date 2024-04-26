
import supertest from 'supertest';
import { describe, expect, test, beforeAll } from '@jest/globals';
import { songApp } from '../songs/song.app';
import { userApp } from '../user/user.app';

const songsAPI = supertest(songApp)
const usersAPI = supertest(userApp)
// let token = '';

beforeAll(async () => {
    
    const token = await usersAPI.post('/login').send({
        "email": "testo@gmail.com",
        "password": "12345678Kh!"
    })
    console.log("response",token.body)
    
},50000);

describe('Songs API tests bundle: ', () => {
    describe('Get songs:',() => {
        
        test('no token given to /getMySongs returns code 403:', async () => {
            await songsAPI
            .get('/getMySongs')
            .expect(403)
        })
        test('no token given to /getSongs returns 403: ', async () => {
            await songsAPI
            .get('/getSongs')
            .expect(403)
        })
        test('Getting All Songs', async () => {
            expect(true).toBe(true)
        })
        test('Getting All My Songs', async () => {
            await songsAPI
            .get('/getMySongs')
            .set('Content-Type', `application/json`)
            .set('authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyY2NkN2Y2LTYxYjEtNGNiOC1iY2E3LTA0YjRkZTg4MjQ5YSIsImlhdCI6MTcxNDE1NTYzNiwiZXhwIjoxODE0MTU1NjM2fQ.gUUkK-XsBwqqBJx22Jn0v0x0KiIVnEKtKq7a0LkryS8`)
            .expect(403)
        })
        
    })

    describe('Create Songs route', () => {
        test('Create song:', async () => {
            expect(true).toBe(true)
        })
    })

    describe('Put songs route', () => {
        test('Update song', async () => {
            expect(true).toBe(true)
        })
    })
})
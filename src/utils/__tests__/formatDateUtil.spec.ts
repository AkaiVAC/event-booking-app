import { describe, expect, it } from 'vitest';
import formatDateUtil from '../formatDateUtil';

describe('formatDateUtil', () => {
    it('formats date objects to the expected format', () => {
        expect(formatDateUtil(new Date('2020-09-20T18:30:00.000Z'))).toBe(
            '21 Sept, 2020'
        );
    });
});

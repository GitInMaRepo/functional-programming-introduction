"use strict";
import chai from "chai";
chai.should();

describe('My movie collection search by name', () => {
    it('should return empty when none found', () => {
        findByTitle("Interstellar", [
            {
                title: "The Matrix",
                year: 1999
            },
            {
                title: "A beautiful mind",
                year: 2001
            },
            {
                title: "Intouchable",
                year: 2011
            },
            {
                title: "Forest Gump",
                year: 1994
            }
        ]).should.be.empty;
    });
});

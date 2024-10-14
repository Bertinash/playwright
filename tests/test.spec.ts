import { test, expect, type Page } from '@playwright/test';
import { describe, suite } from 'node:test';

test.describe("some description", ()=>{
    test("test2", async()=>{
        
    });
    test.describe("some description", ()=>{
        test("test2", async()=>{
            
        });
    
    });

});

suite("some suite", ()=>{
    test("test1", async()=>{

    });
    test("test3", async()=>{

    });
});
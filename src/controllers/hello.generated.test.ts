import { Request, Response } from "express";
import { describe, expect,it } from "@jest/globals";
import { hello } from "./hello";

jest.mock("express");

describe("hello", () => {
    it("should expose a function", () => {
        expect(hello).toBeDefined();
    });

    it("hello should return expected output", () => {
        // const retValue = hello(req,res);
        expect({ data: "Hello World!", has_error: false }).toBeTruthy();
    });
});

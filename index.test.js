import express from "express";
import fs from "fs";
import path from "path";
import engine from ".";

test("template renders", done => {
    const output = fs.readFileSync(path.join(__dirname, "views", "output.html"), "utf-8");

    const app = express();

    app.set("views", path.join(__dirname, "views"));
    app.engine("html", engine);
    app.render("input.html", { message: "world" }, (error, html) => {
        if (error) {
            done(error);
            return;
        }

        try {
            expect(html).toEqualIgnoringWhitespace(output);
            done();
        } catch (error) {
            done(error);
        }
    });
});

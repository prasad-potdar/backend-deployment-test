module.exports = {
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "testTimeout": 1200000,
  "moduleNameMapper": {
    "@app/(.*)": "<rootDir>/src/$1"
  },
  "reporters": [
    "default",
    "../node_modules/jest-html-reporters",
    [
      "jest-html-reporters",
      {
        "publicPath": process.env.JEST_REPORT_DIR || "jest_reports",
        "filename": "jest_report.html",
        "expand": true
      },
    ]
  ],
  "verbose": true
}


module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.json"
        }
    },
    "preset": "ts-jest",
    "roots": [
        "<rootDir>"
    ],
    "transform": {
        "^.+\\.(ts)?$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(ts)$"
    ],
    "testMatch": [
        '**/test/**/*.test.(ts)'
    ],
    "modulePaths": [],
    "moduleFileExtensions": [
        "ts",
        "json",
        "node"
    ],
    "testPathIgnorePatterns": [
        "<rootDir>/(build|node_modules)/"
    ],
    "testEnvironment": 'node'
};
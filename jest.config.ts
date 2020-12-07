module.exports = {
    "globals": {
        "ts-jest": {
            "tsconfig": "<rootDir>/tsconfig.json"
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
        "js",
        "json",
        "node"
    ],
    "testPathIgnorePatterns": [
        "<rootDir>/(build|node_modules)/"
    ],
    "testEnvironment": 'node'
};
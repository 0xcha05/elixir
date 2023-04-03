# Elixir

## About

Elixir uses GPT-3.5 to give your code "healing" abilities. It allows you to execute scripts in various programming languages such as Python, JavaScript that may contain errors, and use GPT-3.5 to suggest changes to the code that can fix the errors. The code is run in a Docker container, which isolates it from the host system and provides a consistent environment for running scripts.

## Setup

    python3 -m venv venv
    pip install -r requirements.txt
    source venv/bin/activate

Add your openAI api key to `openai_key.txt` - _warning!_ by default this uses GPT-4 and may make many repeated calls to the api.

## Example Usage

    python elixir.py buggy_script.py

## Credits

Thanks to https://github.com/biobootloader for creating wolverine which has been a huge inspiration.

For a quick demonstration see his [demo video on twitter](https://twitter.com/bio_bootloader/status/1636880208304431104).

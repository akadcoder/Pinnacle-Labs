// AI Autocorrect Tool - Enhanced Implementation

class AutocorrectTool {
    constructor() {
        this.currentMode = 'autocorrect';
        this.corrections = [];
        this.dictionary = new Set();
        this.grammarRules = [];
        this.commonMistakes = new Map();
        this.isProcessing = false;
        
        this.init();
    }

    init() {
        this.loadDictionary();
        this.loadGrammarRules();
        this.loadCommonMistakes();
        this.setupEventListeners();
    }

    loadDictionary() {
        const commonWords = [
            'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not',
            'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from',
            'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would',
            'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which',
            'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know',
            'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see',
            'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think',
            'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well',
            'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most',
            'us', 'is', 'water', 'long', 'find', 'here', 'thing', 'tell', 'hand', 'high',
            'really', 'life', 'still', 'school', 'never', 'form', 'food', 'keep', 'child',
            'feet', 'land', 'side', 'without', 'boy', 'once', 'animal', 'something', 'seem',
            'next', 'white', 'children', 'begin', 'got', 'walk', 'example', 'ease', 'paper',
            'group', 'always', 'music', 'those', 'both', 'mark', 'often', 'letter', 'until',
            'mile', 'river', 'car', 'feet', 'care', 'second', 'book', 'carry', 'took', 'science',
            'eat', 'room', 'friend', 'began', 'idea', 'fish', 'mountain', 'stop', 'once', 'base',
            'hear', 'horse', 'cut', 'sure', 'watch', 'color', 'face', 'wood', 'main', 'open',
            'hello', 'world', 'computer', 'program', 'software', 'development', 'technology',
            'internet', 'website', 'application', 'system', 'database', 'server', 'network',
            'security', 'algorithm', 'function', 'variable', 'method', 'class', 'object',
            'array', 'string', 'number', 'boolean', 'null', 'undefined', 'true', 'false',
            'document', 'window', 'element', 'event', 'click', 'change', 'submit', 'load',
            'error', 'success', 'warning', 'info', 'message', 'alert', 'confirm', 'prompt',
            'nice', 'excellent', 'wonderful', 'amazing', 'fantastic', 'great', 'perfect',
            'awesome', 'brilliant', 'outstanding', 'superb', 'marvelous', 'incredible',
            'beautiful', 'lovely', 'pretty', 'gorgeous', 'stunning', 'attractive',
            'happy', 'joy', 'pleased', 'excited', 'thrilled', 'delighted', 'content',
            'smart', 'intelligent', 'clever', 'wise', 'brilliant', 'genius', 'bright',
            'big', 'large', 'huge', 'enormous', 'giant', 'massive', 'vast', 'immense',
            'small', 'tiny', 'little', 'miniature', 'micro', 'petite', 'compact',
            'fast', 'quick', 'rapid', 'swift', 'speedy', 'hasty', 'prompt', 'immediate',
            'slow', 'gradual', 'leisurely', 'sluggish', 'delayed', 'prolonged'
        ];

        commonWords.forEach(word => {
            this.dictionary.add(word.toLowerCase());
        });
    }

    loadCommonMistakes() {
        // Common typing mistakes and their corrections
        this.commonMistakes = new Map([
            ['teh', 'the'],
            ['adn', 'and'],
            ['nad', 'and'],
            ['hte', 'the'],
            ['fo', 'of'],
            ['nto', 'not'],
            ['cna', 'can'],
            ['niec', 'nice'],
            ['niece', 'nice'],
            ['nise', 'nice'],
            ['niec', 'nice'],
            ['godo', 'good'],
            ['goood', 'good'],
            ['gud', 'good'],
            ['wrk', 'work'],
            ['wokr', 'work'],
            ['workign', 'working'],
            ['workin', 'working'],
            ['bcoz', 'because'],
            ['becoz', 'because'],
            ['becuse', 'because'],
            ['becase', 'because'],
            ['definately', 'definitely'],
            ['definetly', 'definitely'],
            ['seperate', 'separate'],
            ['recieve', 'receive'],
            ['occured', 'occurred'],
            ['accomodate', 'accommodate'],
            ['neccessary', 'necessary'],
            ['tommorrow', 'tomorrow'],
            ['existance', 'existence'],
            ['maintainance', 'maintenance'],
            ['arguement', 'argument'],
            ['judgement', 'judgment'],
            ['occassion', 'occasion'],
            ['begining', 'beginning'],
            ['comming', 'coming'],
            ['runing', 'running'],
            ['geting', 'getting'],
            ['puting', 'putting'],
            ['stoping', 'stopping'],
            ['writting', 'writing'],
            ['siting', 'sitting'],
            ['hiting', 'hitting'],
            ['cuting', 'cutting'],
            ['planing', 'planning'],
            ['hopping', 'hoping'],
            ['dinning', 'dining'],
            ['wining', 'winning'],
            ['loosing', 'losing'],
            ['chosing', 'choosing'],
            ['useing', 'using'],
            ['makeing', 'making'],
            ['careing', 'caring'],
            ['dateing', 'dating'],
            ['loveing', 'loving'],
            ['hopeing', 'hoping'],
            ['liveing', 'living'],
            ['giveing', 'giving'],
            ['moveing', 'moving'],
            ['proveing', 'proving'],
            ['improveing', 'improving'],
            ['maneuvering', 'maneuvering']
        ]);
    }

    loadGrammarRules() {
        this.grammarRules = [
            {
                pattern: /\bi\b/g,
                replacement: 'I',
                type: 'capitalization',
                description: 'Capitalize pronoun "I"'
            },
            {
                pattern: /^\s*([a-z])/,
                replacement: (match, letter) => letter.toUpperCase(),
                type: 'capitalization',
                description: 'Capitalize first letter of sentence'
            },
            {
                pattern: /\.\s*([a-z])/g,
                replacement: (match, letter) => '. ' + letter.toUpperCase(),
                type: 'capitalization',
                description: 'Capitalize after period'
            },
            {
                pattern: /\!\s*([a-z])/g,
                replacement: (match, letter) => '! ' + letter.toUpperCase(),
                type: 'capitalization',
                description: 'Capitalize after exclamation'
            },
            {
                pattern: /\?\s*([a-z])/g,
                replacement: (match, letter) => '? ' + letter.toUpperCase(),
                type: 'capitalization',
                description: 'Capitalize after question mark'
            },
            {
                pattern: /\s{2,}/g,
                replacement: ' ',
                type: 'spacing',
                description: 'Remove extra spaces'
            },
            {
                pattern: /\s+([,.!?;:])/g,
                replacement: '$1',
                type: 'punctuation',
                description: 'Remove space before punctuation'
            },
            {
                pattern: /([.!?])\s*([a-zA-Z])/g,
                replacement: '$1 $2',
                type: 'spacing',
                description: 'Add space after sentence endings'
            },
            {
                pattern: /\s*,\s*/g,
                replacement: ', ',
                type: 'punctuation',
                description: 'Fix comma spacing'
            },
            {
                pattern: /\s*;\s*/g,
                replacement: '; ',
                type: 'punctuation',
                description: 'Fix semicolon spacing'
            },
            {
                pattern: /\s*:\s*/g,
                replacement: ': ',
                type: 'punctuation',
                description: 'Fix colon spacing'
            }
        ];
    }

    setupEventListeners() {
        const debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        };

        this.debouncedProcess = debounce(this.processText.bind(this), 300);
    }

    async processText() {
        if (this.isProcessing) return;
        
        const inputText = document.getElementById('input-text').value;
        
        if (!inputText.trim()) {
            this.clearOutput();
            return;
        }

        this.isProcessing = true;
        this.showLoading(true);

        try {
            let correctedText = inputText;
            this.corrections = [];

            switch (this.currentMode) {
                case 'autocorrect':
                    correctedText = await this.performAutocorrect(inputText);
                    break;
                case 'grammar':
                    correctedText = await this.performGrammarCheck(inputText);
                    break;
                case 'enhance':
                    correctedText = await this.performTextEnhancement(inputText);
                    break;
            }

            this.displayOutput(correctedText);
            this.displaySuggestions();
            this.updateStats(inputText);

        } catch (error) {
            console.error('Processing error:', error);
            this.showError('An error occurred while processing text');
        } finally {
            this.isProcessing = false;
            this.showLoading(false);
        }
    }

    async performAutocorrect(text) {
        let correctedText = text;
        
        // First, apply common mistake corrections
        for (let [mistake, correction] of this.commonMistakes) {
            const regex = new RegExp('\\b' + mistake + '\\b', 'gi');
            const matches = [...correctedText.matchAll(regex)];
            
            for (let match of matches) {
                this.corrections.push({
                    type: 'spelling',
                    original: match[0],
                    corrected: correction,
                    position: match.index,
                    explanation: `Common mistake: "${mistake}" → "${correction}"`
                });
            }
            
            correctedText = correctedText.replace(regex, correction);
        }

        // Then check other words
        const words = correctedText.split(/(\s+)/);
        const correctedWords = [];

        for (let word of words) {
            if (word.trim()) {
                const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
                
                if (cleanWord && !this.dictionary.has(cleanWord) && !this.commonMistakes.has(cleanWord)) {
                    const suggestion = this.findBestSuggestion(cleanWord);
                    if (suggestion && suggestion !== cleanWord) {
                        const correctedWord = word.replace(new RegExp(cleanWord, 'gi'), suggestion);
                        correctedWords.push(correctedWord);
                        
                        this.corrections.push({
                            type: 'spelling',
                            original: word,
                            corrected: correctedWord,
                            position: text.indexOf(word),
                            explanation: `Spelling suggestion: "${cleanWord}" → "${suggestion}"`
                        });
                    } else {
                        correctedWords.push(word);
                    }
                } else {
                    correctedWords.push(word);
                }
            } else {
                correctedWords.push(word);
            }
        }

        return correctedWords.join('');
    }

    async performGrammarCheck(text) {
        let correctedText = text;

        for (let rule of this.grammarRules) {
            const matches = [...correctedText.matchAll(rule.pattern)];
            
            for (let match of matches) {
                const original = match[0];
                const corrected = typeof rule.replacement === 'function' 
                    ? rule.replacement(match[0], ...match.slice(1))
                    : rule.replacement;
                
                if (original !== corrected) {
                    this.corrections.push({
                        type: 'grammar',
                        original: original,
                        corrected: corrected,
                        position: match.index,
                        explanation: rule.description
                    });
                }
            }

            correctedText = correctedText.replace(rule.pattern, rule.replacement);
        }

        return correctedText;
    }

    async performTextEnhancement(text) {
        let enhancedText = text;

        const enhancements = {
            'good': 'excellent',
            'bad': 'terrible',
            'big': 'enormous',
            'small': 'tiny',
            'nice': 'wonderful',
            'ok': 'acceptable',
            'okay': 'acceptable',
            'very': 'extremely',
            'really': 'tremendously',
            'pretty': 'quite',
            'kind of': 'somewhat',
            'sort of': 'somewhat',
            'a lot': 'many',
            'lots of': 'numerous',
            'tons of': 'numerous',
            'bunch of': 'several',
            'stuff': 'things',
            'things': 'items',
            'cool': 'impressive',
            'awesome': 'remarkable',
            'amazing': 'extraordinary',
            'crazy': 'incredible',
            'weird': 'unusual',
            'funny': 'amusing',
            'sad': 'melancholy',
            'happy': 'delighted',
            'mad': 'furious',
            'scared': 'terrified',
            'tired': 'exhausted',
            'hungry': 'ravenous',
            'thirsty': 'parched'
        };

        for (let [original, enhanced] of Object.entries(enhancements)) {
            const regex = new RegExp('\\b' + original + '\\b', 'gi');
            const matches = [...enhancedText.matchAll(regex)];
            
            for (let match of matches) {
                this.corrections.push({
                    type: 'enhancement',
                    original: match[0],
                    corrected: enhanced,
                    position: match.index,
                    explanation: `Word enhancement: "${original}" → "${enhanced}"`
                });
            }
            
            enhancedText = enhancedText.replace(regex, enhanced);
        }

        return enhancedText;
    }

    findBestSuggestion(word) {
        let bestSuggestion = null;
        let bestScore = Math.min(3, Math.floor(word.length / 2));

        for (let dictWord of this.dictionary) {
            const distance = this.levenshteinDistance(word, dictWord);
            if (distance <= bestScore) {
                bestScore = distance;
                bestSuggestion = dictWord;
            }
        }

        return bestSuggestion;
    }

    levenshteinDistance(str1, str2) {
        const matrix = [];

        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        return matrix[str2.length][str1.length];
    }

    displayOutput(text) {
        const outputElement = document.getElementById('output-text');
        outputElement.innerHTML = `<p>${text}</p>`;
        outputElement.classList.add('fade-in');
        
        setTimeout(() => {
            outputElement.classList.remove('fade-in');
        }, 500);
    }

    displaySuggestions() {
        const suggestionsElement = document.getElementById('suggestions-list');
        const correctionCount = document.getElementById('correction-count');
        
        correctionCount.textContent = `${this.corrections.length} corrections`;
        
        if (this.corrections.length === 0) {
            suggestionsElement.innerHTML = '<p class="placeholder">No corrections needed. Great job!</p>';
            return;
        }

        suggestionsElement.innerHTML = this.corrections.map((correction, index) => `
            <div class="suggestion-item">
                <div class="suggestion-header">
                    <span class="error-type ${correction.type}">${correction.type}</span>
                    <button class="apply-btn" onclick="applySuggestion(${index})">
                        Apply
                    </button>
                </div>
                <div class="suggestion-content">
                    <span class="original-text">${correction.original}</span>
                    <span>→</span>
                    <span class="corrected-text">${correction.corrected}</span>
                </div>
                <div class="suggestion-explanation">
                    ${correction.explanation}
                </div>
            </div>
        `).join('');
    }

    updateStats(text) {
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const errors = this.corrections.length;

        document.getElementById('word-count').textContent = `${words} words`;
        document.getElementById('char-count').textContent = `${chars} characters`;
        document.getElementById('error-count').textContent = `${errors} errors`;
    }

    clearOutput() {
        document.getElementById('output-text').innerHTML = '<p class="placeholder">Your corrected text will appear here...</p>';
        document.getElementById('suggestions-list').innerHTML = '<p class="placeholder">Suggestions will appear here...</p>';
        document.getElementById('correction-count').textContent = '0 corrections';
        document.getElementById('word-count').textContent = '0 words';
        document.getElementById('char-count').textContent = '0 characters';
        document.getElementById('error-count').textContent = '0 errors';
    }

    showLoading(show) {
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.toggle('show', show);
    }

    showError(message) {
        const outputElement = document.getElementById('output-text');
        outputElement.innerHTML = `<p style="color: var(--error-color); text-align: center;"><i class="fas fa-exclamation-triangle"></i> ${message}</p>`;
    }
}

// Global functions for UI interactions
function setMode(mode) {
    autocorrectTool.currentMode = mode;
    
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.tool-btn').classList.add('active');
    
    // Reprocess text with new mode
    if (document.getElementById('input-text').value.trim()) {
        autocorrectTool.processText();
    }
}

function processText() {
    autocorrectTool.debouncedProcess();
}

function clearText() {
    document.getElementById('input-text').value = '';
    autocorrectTool.clearOutput();
}

function copyText() {
    const outputText = document.getElementById('output-text').textContent;
    
    if (outputText && !outputText.includes('Your corrected text will appear here')) {
        navigator.clipboard.writeText(outputText).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text:', err);
        });
    }
}

function exportText() {
    const outputText = document.getElementById('output-text').textContent;
    
    if (outputText && !outputText.includes('Your corrected text will appear here')) {
        const blob = new Blob([outputText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'corrected-text.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

function applySuggestion(index) {
    const correction = autocorrectTool.corrections[index];
    const inputText = document.getElementById('input-text');
    inputText.value = inputText.value.replace(correction.original, correction.corrected);
    processText();
}

// Initialize the autocorrect tool
let autocorrectTool;
document.addEventListener('DOMContentLoaded', () => {
    autocorrectTool = new AutocorrectTool();
});


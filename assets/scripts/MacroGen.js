// jQuery for showing/hiding

// atk jQuery
$("#atk").change(function(){
    $("#number,#level,#spellLevel,#spellNumber").hide();
    if ($(this).val() == "atk") {
        $("#number").show();
    } else if ($(this).val() == "spell") {
        $("#spellLevel").show();
        $("#level").show();
        $("#spellNumber").show();
    }
});
$("#spell_number,#atk_number").change(function(){
    updateMacro();
});

// fx jQuery

$("#fx").change(function(){
    $("#directionOptions,#undirected,#directed,#effect1,#effect2,#color").hide();
    if ($(this).val()) {
        $("#directionOptions").show();
    }
});
$("#directionOptions").change(function(){
    $("#undirected,#directed,#effect1,#effect2,#color").hide();
    if ($(this).val() == "undirected") {
        $("#effect1").show();
    } else if ($(this).val() == "directed") {
        $("#effect2").show();
    }
});
$("#undy-effect").change(function(){
    $("#color").hide();
    if ($(this).val()) {
        $("#color").show();
    }
});
$("#dir-effect").change(function(){
    $("#color").hide();
    if ($(this).val()) {
        $("#color").show();
    }
});
$("#colorChoice").change(function(){
    updateMacro();
});

$("#sound").change(function(){
    updateMacro();
});

// Functions

function getATK () {
    if ((!$("#atk").val()) || (!$("#atk_number").val() && !$("#spell_number").val())) {
        return "";
    } else if ($("#atk").val() == "atk") {
        let number = parseInt($("#atk_number").val()) - 1;
        return `%{selected|repeating_attack_$${number}_attack}`;
    } else {
        let level = $("#level").val();
        let number = parseInt($("#spell_number").val()) - 1;
        return `%{selected|repeating_spell-${level}_$${number}_spell}`;
    }
}

function ATKandFX () {
    if (getATK() && getFX()) {
        return "\n";
    } else {
        return "";
    }
}

function getFX () {
    if ((!$("#directionOptions").val()) || (!$("#colorChoice").val())) {
        return "";
    } else if ($("#directionOptions").val() == "undirected") {
        let effect = document.getElementById('undy-effect').value;
        let color = document.getElementById('colorChoice').value;
        let target = '@{target|Where?|token_id}';
        return `/fx ${effect}-${color} ${target}`;
    } else if ($("#directionOptions").val() == "directed") {
        let effect = document.getElementById('dir-effect').value;
        let color = document.getElementById('colorChoice').value;
        let source = '@{target|Source?|token_id}';
        let target = '@{target|Target?|token_id}';
        return `/fx ${effect}-${color} ${source} ${target}`;
    }
}

function FXandSOUND () {
    if (getFX() && getSOUND()) {
        return "\n";
    } else {
        return "";
    }
}

function ATKandSOUND () {
    if (!getFX() && getATK() && getSOUND()) {
        return "\n";
    } else {
        return "";
    }
}

function getSOUND () {
    if ($("#sound").val()) {
        return "!splay "+ $("#sound").val();
    } else {
        return "";
    }
}

function updateMacro () {
    // Write to correct DOM elements (a little janky because of Markdown -> Dom expansion)
    document.getElementById('macro-id').firstChild.firstChild.firstChild.innerHTML = getATK() + ATKandFX() + getFX() + FXandSOUND() + ATKandSOUND() + getSOUND();
}
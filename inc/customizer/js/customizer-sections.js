jQuery(document).ready(function ($) {

    $('.chosen-select').chosen({
        search_contains: true,
        width: '100%'
    });

    $('.google-font-select').each(function (index) {
        var customizeSettingLink = $(this).data('customize-setting-link');
        showGoogleFontVariants(customizeSettingLink, $(this).val(), $(this).find(':selected').data('variants'));
    });

    $('.google-font-select').on('change', function (e) {
        var customizeSettingLink = $(this).data('customize-setting-link');
        showGoogleFontVariants(customizeSettingLink, $(this).val(), $(this).find(':selected').data('variants'));
    });

    /**
     * Show Google Font Variants
     *
     * @param customizeSettingLink
     * @param fontValue
     * @param variantsValue
     */
    function showGoogleFontVariants(customizeSettingLink, fontValue, variantsValue) {
        var targetSelectID = customizeSettingLink.replace('family', 'weight');
        var targetSelect = $('#customize-control-' + targetSelectID + ' select');

        if (typeof targetSelect === 'undefined') {
            return false;
        }

        var currentlySelected = targetSelect.val();
        var variantsArray = variantsValue.split(',');
        var choices = '';

        $.each(variantsArray, function (index, fontVariant) {
            choices += '<option value="' + fontVariant + '"';
            if (fontVariant === currentlySelected) {
                choices += ' selected="selected"';
            }
            choices += '>' + fontVariant + '</option>';
        });

        targetSelect.empty().append(choices);
    }

});
Demo.static.pages.dialogs = function ( demo ) {
	var $demo = demo.$element,
		$fieldsets = $( [] ),
		windows = {},
		windowManager = new OO.ui.WindowManager();

	var configs = [
		{
			name: 'Convenience functions',
			id: 'demo-section-functions',
			examples: [
				{
					name: 'Quick alert',
					method: 'alert',
					param: 'Alert message.'
				},
				{
					name: 'Larger alert',
					method: 'alert',
					param: 'Alert message.',
					data: { size: 'larger' }
				},
				{
					name: 'Quick confirm',
					method: 'confirm',
					param: 'Confirmation message?'
				},
				{
					name: 'Quick prompt',
					method: 'prompt',
					param: 'Text prompt:'
				}
			]
		},
		{
			name: 'Dialog interface',
			id: 'demo-section-dialog',
			examples: [
				{
					name: 'Simple dialog (small)',
					config: {
						size: 'small'
					}
				},
				{
					name: 'Simple dialog (medium)',
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Simple dialog (large)',
					config: {
						size: 'large'
					}
				},
				{
					name: 'Simple dialog (larger)',
					config: {
						size: 'larger'
					}
				},
				{
					name: 'Simple dialog (full)',
					config: {
						size: 'full'
					}
				},
				{
					name: 'Simple dialog (delayed ready process)',
					dialogClass: Demo.DelayedReadyProcessDialog,
					config: {
						size: 'large'
					}
				},
				{
					name: 'Simple dialog (failed ready process)',
					dialogClass: Demo.FailedReadyProcessDialog,
					config: {
						size: 'large'
					}
				},
				{
					name: 'Simple dialog (failed setup process)',
					dialogClass: Demo.FailedSetupProcessDialog,
					config: {
						size: 'large'
					}
				},
				{
					name: 'Process dialog (medium)',
					dialogClass: Demo.ProcessDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Process dialog (medium, long labels)',
					dialogClass: Demo.FitLabelsProcessDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Process dialog (medium, long)',
					dialogClass: Demo.LongProcessDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Process dialog (full)',
					dialogClass: Demo.ProcessDialog,
					config: {
						size: 'full'
					}
				},
				{
					name: 'Broken dialog (error handling)',
					dialogClass: Demo.BrokenDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Message dialog (generic)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Continue?',
						message: 'It may be risky'
					}
				},
				{
					name: 'Message dialog (lengthy)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Continue?',
						message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis laoreet elit. Nam eu velit ullamcorper, volutpat elit sed, viverra massa. Aenean congue aliquam lorem, et laoreet risus condimentum vel. Praesent nec imperdiet mauris. Nunc eros magna, iaculis sit amet ante id, dapibus tristique lorem. Praesent in feugiat lorem, sit amet porttitor eros. Donec sapien turpis, pretium eget ligula id, scelerisque tincidunt diam. Pellentesque a venenatis tortor, at luctus nisl. Quisque vel urna a enim mattis rutrum. Morbi eget consequat nisl. Nam tristique molestie diam ac consequat. Nam varius adipiscing mattis. Praesent sodales volutpat nulla lobortis iaculis. Quisque vel odio eget diam posuere imperdiet. Fusce et iaculis odio. Donec in nibh ut dui accumsan vehicula quis et massa.'
					}
				},
				{
					name: 'Message dialog (1 action)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Storage limit reached',
						message: 'You are out of disk space',
						actions: [
							{
								action: 'accept',
								label: 'Dismiss',
								flags: 'primary'
							}
						]
					}
				},
				{
					name: 'Message dialog (2 actions)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Cannot save data',
						message: 'The server is not responding',
						actions: [
							{
								action: 'reject',
								label: 'Cancel',
								flags: [ 'safe', 'close' ]
							},
							{
								action: 'repeat',
								label: 'Try again',
								flags: [ 'primary', 'progressive' ]
							}
						]
					}
				},
				{
					name: 'Message dialog (2 actions, long)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Cannot save data',
						message: 'The server is not responding',
						actions: [
							{
								action: 'reject',
								label: 'Cancel',
								flags: [ 'safe', 'close' ]
							},
							{
								action: 'repeat',
								// This message should be just long enough to trigger a vertical
								// layout but will probably vary by which font is used.
								label: 'Try to save this again',
								flags: [ 'primary', 'progressive' ]
							}
						]
					}
				},
				{
					name: 'Message dialog (3 actions)',
					dialogClass: OO.ui.MessageDialog,
					data: {
						title: 'Delete file?',
						message: 'The file will be irreversably obliterated. Proceed with caution.',
						actions: [
							{ action: 'reject', label: 'Cancel', flags: [ 'safe', 'close' ] },
							{ action: 'reject', label: 'Move file to trash' },
							{
								action: 'accept',
								label: 'Obliterate',
								flags: [ 'primary', 'destructive' ]
							}
						]
					}
				}
			]
		},
		{
			name: 'Elements best used inside dialogs',
			id: 'demo-section-elements',
			examples: [
				{
					name: 'Search widget dialog (medium)',
					dialogClass: Demo.SearchWidgetDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Booklet dialog',
					dialogClass: Demo.BookletDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Outlined booklet dialog (aside navigation)',
					dialogClass: Demo.OutlinedBookletDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Continuous outlined booklet dialog (aside navigation)',
					dialogClass: Demo.ContinuousOutlinedBookletDialog
				},
				{
					name: 'Indexed dialog (tab navigation)',
					dialogClass: Demo.IndexedDialog,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Menu dialog',
					dialogClass: Demo.MenuDialog,
					config: {
						size: 'medium'
					}
				}
			]
		},
		{
			name: 'Low-level test cases',
			id: 'demo-section-tests',
			examples: [
				{
					name: 'FloatableElement test',
					dialogClass: Demo.FloatableTest,
					config: {
						size: 'medium'
					}
				},
				{
					name: 'Dialog with dropdowns ($overlay test)',
					dialogClass: Demo.DialogWithDropdowns,
					config: {
						size: 'large'
					}
				},
				{
					name: 'PopupButtonWidget test',
					dialogClass: Demo.PopupButtonWidgetTest,
					config: {
						size: 'large'
					}
				},
				{
					name: 'Dialog with popup and dropdown (ClippableElement test)',
					dialogClass: Demo.DialogWithPopupAndDropdown,
					config: {
						size: 'large'
					}
				}
			]
		}
	];

	function openDialog( name, data ) {
		windowManager.openWindow( name, data );
	}

	configs.forEach( function ( config, j ) {
		var fieldset = new Demo.LinkedFieldsetLayout( {
			label: config.name,
			id: config.id
		} );

		$fieldsets = $fieldsets.add( fieldset.$element );

		config.examples.forEach( function ( example, i ) {
			var openButton = new OO.ui.ButtonWidget( {
				framed: false,
				icon: 'window',
				label: $( '<span>' ).attr( 'dir', 'ltr' ).text( example.name )
			} );

			if ( example.method ) {
				openButton.on(
					'click', OO.ui.bind(
						OO.ui,
						example.method,
						example.param,
						example.data
					)
				);
			} else {
				var name = 'window_' + j + '_' + i;
				var DialogClass = example.dialogClass || Demo.SimpleDialog;
				windows[ name ] = new DialogClass( example.config );
				openButton.on(
					'click', OO.ui.bind( openDialog, this, name, example.data )
				);
			}

			fieldset.addItems( [ new OO.ui.FieldLayout( openButton, { align: 'inline' } ) ] );
		} );
	} );
	windowManager.addWindows( windows );

	$demo.append(
		new OO.ui.PanelLayout( {
			expanded: false,
			framed: true
		} ).$element
			.addClass( 'demo-container demo-dialogs' )
			.attr( 'role', 'main' )
			.append( $fieldsets ),
		windowManager.$element
	);

	demo.once( 'destroy', function () {
		windowManager.destroy();
		OO.ui.getWindowManager().closeWindow( OO.ui.getWindowManager().getCurrentWindow() );
	} );
};
